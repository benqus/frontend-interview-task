import { randomUUID, randomInt } from "node:crypto";

import { DateTime } from "luxon";
import { faker } from "@faker-js/faker";

export type JobInternal = {
  id: string;
  name: string;
  createdAt: Date;
  inProgressAt: Date;
  doneAt: Date;
  deletedAt: Date;
};

const jobs: JobInternal[] = [];

async function createJob() {
  const id = randomUUID();
  const createdAt = DateTime.utc();
  const inProgressAt = createdAt.plus({ seconds: randomInt(1, 9) });
  const doneAt = inProgressAt.plus({ seconds: randomInt(1, 9) });
  const deletedAt = doneAt.plus({ minutes: randomInt(2, 5) });

  jobs.push({
    id,
    name: faker.hacker.phrase(),
    createdAt: createdAt.toJSDate(),
    inProgressAt: inProgressAt.toJSDate(),
    doneAt: doneAt.toJSDate(),
    deletedAt: deletedAt.toJSDate(),
  });
}

export async function getJobList() {
  return jobs;
}

export async function seedMoreJobs() {
  const jobs = await getJobList();
  const lastJob = jobs.at(-1);
  if (
    lastJob &&
    DateTime.utc().diff(DateTime.fromJSDate(lastJob.createdAt)).as("seconds") <
      10
  ) {
    return;
  }

  const length = randomInt(1, 5);
  return Promise.all(Array.from({ length }).map(() => createJob()));
}
