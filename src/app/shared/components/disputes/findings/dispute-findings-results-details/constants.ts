import { IInvestigationResultInfo } from "./interfaces";

export const DEFAULT_INVESTIGATION_RESULT_TYPES: IInvestigationResultInfo[] = [
  {
    type: 'deleted',
    title: 'INVESTIGATION RESULTS - DELETED',
    description: 'In response to your dispute, this item was DELETED from your credit report.',
  },
  {
    type: 'dispute_info_updated',
    title: 'INVESTIGATION RESULTS - DISPUTED INFORMATION UPDATED: ',
    subtitle: 'A change was made to the item(s) based on your dispute.',
    description: 'We investigated the information you disputed and updated:',
    detailDescription: 'Here is how this item appears on your credit report following our investigation.'
  },
  {
    type: 'info_updated',
    title: 'INVESTIGATION RESULTS - INFORMATION UPDATED: ',
    subtitle: 'A change was made to the item(s) based on your dispute.',
    description: 'We investigated the information you disputed and updated:',
    detailDescription: 'Here is how this item appears on your credit report following our investigation.'
  },
  {
    type: 'dispute_info_other_updated',
    title: 'INVESTIGATION RESULTS - DISPUTED INFORMATION UPDATED AND OTHER INFORMATION UPDATED: ',
    subtitle: 'A change was made to the item(s) based on your dispute and other information has also changed.',
    description: 'We investigated the information you disputed and updated:',
    detailDescription: 'Here is how this item appears on your credit report following our investigation.'
  },
  {
    type: 'reinserted',
    title: 'INVESTIGATION RESULTS – REINSERTED:',
    subtitle: 'This previously deleted item(s) has been verified; therefore, it has been added back to your credit report.',
    description: 'We investigated the information you disputed and this previously deleted item has now been verified and ADDED back to your credit report',
    detailDescription: 'Here is how this information appears on your credit report following our investigation.'
  },
  {
    type: 'verified_updated',
    title: 'INVESTIGATION RESULTS - VERIFIED AND UPDATED:',
    subtitle: 'The disputed item(s) was verified as belonging to you and information has changed or been updated to reflect recent activity.',
    description: 'We investigated this item, verified it belongs to you, and updated: ',
    detailDescription: 'Here is how this item appears on your credit report following our investigation.'
  },
  {
    type: 'verified_accurate',
    title: 'INVESTIGATION RESULTS - VERIFIED AS ACCURATE: ',
    subtitle: 'The disputed item was verified as accurate.',
    description: 'We investigated the information you disputed and the disputed information was VERIFIED AS ACCURATE',
    detailDescription: 'Here is how this item appears on your credit report following our investigation.'
  },
  {
    type: 'verified_accurate_updated',
    title: 'INVESTIGATION RESULTS - VERIFIED AS ACCURATE AND UPDATED: ',
    subtitle: 'The disputed item(s) was verified as accurate; however, other information has also changed.',
    description: 'We investigated the information you disputed and the disputed information was VERIFIED AS ACCURATE; however, we updated: ',
    detailDescription: 'Here is how this account appears on your credit report following our investigation.'
  },
];
