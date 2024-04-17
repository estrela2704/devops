import { Injectable } from '@nestjs/common';
import { collectDefaultMetrics, register } from 'prom-client';

@Injectable()
export class PrometheusService {
  constructor() {
    collectDefaultMetrics();
  }

  async getMetrics() {
    return await register.metrics();
  }
}
