export class ServerDatabase {
    dbName: string;
    timeToFull: number;
    totalSizeMb: number;
    dataUsedMb: number;
    dataUsedPct: number;
    logSizeMb: number;
    logUsedMb: number;
    logUsedPct: number;
    tableCount: number;
    resourcePoolName: string;
    disks: string;
    poolConsumptionPercentage: number;
    isAutoShrinkOn: string;
    isAutoCreateStatsOn: string;
    isAutoUpdateStatsOn: string;
    isAutoUpdateStatsAsyncOn: string;
    isReadOnly: string;
    logReuseWait: number;
    dataSizeMb: number;
    dataFreeMb: number;
    logFreeMb: number;
    fileGroupCount: number;
    growthRate: number;
    xtpEnabled: string;
    poolAllocated: number;
    poolUsed: number;
  }