import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "accountStatus",
})
export class AccountStatusToHexPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value ? statuses[value] : null;
  }
}

const statuses: Record<string, any> = {
  excellent: "#4BD269",
  good: "#BBD904",
  fair: "#F59300",
  poor: "#F56700",
  verypoor: '#E93C25',
  closed: '#DADADA',
};
