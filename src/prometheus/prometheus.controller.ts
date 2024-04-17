import { Controller, Get, Res } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { register } from 'prom-client';

@Controller()
export class PrometheusController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Get('/metrics')
  async getMetrics(@Res() res) {
    res.set('Content-Type', register.contentType);
    res.end(await this.prometheusService.getMetrics());
  }
}
