import defaultData from './default-contacts.json';

let data = defaultData;

export const getContacts = () => {
  return data;
};

export const saveContact = contact => {
  data.push(contact);
};

export const deleteContact = contact => {
  data = data.filter(c => c._id !== contact._id);
};
