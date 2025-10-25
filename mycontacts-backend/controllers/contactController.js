//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).send('view all contacts');
}

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  res.status(201).send('create new contact');
}

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContactById = (req, res) => {
  res.status(200).send(`view contact with id ${req.params.id}`);
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).send(`update contact with id ${req.params.id}`);
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
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
