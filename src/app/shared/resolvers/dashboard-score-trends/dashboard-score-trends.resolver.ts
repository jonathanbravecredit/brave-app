import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IGetTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardScoreTrendsResolver implements Resolve<IGetTrendingData | null> {
  constructor(private transunion: TransunionService) {}

  async resolve(): Promise<IGetTrendingData | null> {
    const now = new Date();
    now.setMonth(now.getMonth() - 12);
    const data = await this.transunion.getTrendingData(now.toISOString());
    if (data?.success) {
      return data.data;
    } else {
      return null;
    }
  }
}
