import defaultLabel from './default-labels.json';

let labelsData = defaultLabel;

export const getLabelsWithCount = () => labelsData;
export const getLabels = () => labelsData.map(labelData => labelData.label);
export const incrementLabelCount = label =>
  labelsData.map(labelData => (labelData.label === label ? labelData.count++ : labelData));
export const decrementLabelCount = label =>
  labelsData.map(labelData => {
    if (labelData.label === label) return labelData.count > 0 ? labelData.count-- : labelData;
    return labelData;
  });
