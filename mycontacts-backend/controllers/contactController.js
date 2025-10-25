//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
  res.status(200).send('view all contacts');
}

const createContact = (req, res) => {
  res.status(201).send('create new contact');
}

const getContactById = (req, res) => {
  res.status(200).send(`view contact with id ${req.params.id}`);
}

const updateContact = (req, res) => {
  res.status(200).send(`update contact with id ${req.params.id}`);
}

const deleteContact = (req, res) => {
  res.status(200).send(`delete contact with id ${req.params.id}`);
}

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact
}
