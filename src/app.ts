import express, { type Express } from "express";

export function createApp(): Express {
  const app = express();

  return app;
}
