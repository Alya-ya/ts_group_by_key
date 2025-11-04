type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newItem: GroupsMap<T> = {};

  for (const hey of items) {
    const groupKey = String(hey[key]);

    if (!newItem[groupKey]) {
      newItem[groupKey] = [];
    }
    newItem[groupKey].push(hey);
  }

  return newItem;
}
