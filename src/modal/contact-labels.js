import defaultLabel from './default-labels.json';

export const getLabelsWithCount = () => defaultLabel;
export const getLabels = () => {
  return defaultLabel.map(labelData => labelData.label);
};
