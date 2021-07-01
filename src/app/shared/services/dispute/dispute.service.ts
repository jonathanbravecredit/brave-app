import { Injectable } from '@angular/core';
import { APIService } from '@shared/services/aws/api.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Injectable({
  providedIn: 'root',
})
export class DisputeService {
  constructor(private api: APIService, private transunion: TransunionService) {}
}
