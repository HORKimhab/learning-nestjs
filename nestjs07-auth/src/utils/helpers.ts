import { config } from 'dotenv';

config();

export function setENV(name: any ): any {
    const value = process.env[name];
    if (!name) {
      throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
  }