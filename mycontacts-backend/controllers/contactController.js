//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: 'view all contacts' });
}

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({ message: "create new contact" });
}

//@desc Get contact by ID
//@route GET /api/contacts/:id
//@access Public
const getContactById = (req, res) => {
  res.status(200).json({ message: `view contact with id ${req.params.id}` });
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact with id ${req.params.id}` });
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact with id ${req.params.id}` });
}

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact
}
