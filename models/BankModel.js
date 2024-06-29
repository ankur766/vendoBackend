const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BankSchema = new mongoose.Schema({
  bankID: { type: Number, unique: true, index: true },
  bankName: { type: String, required: true },
  emergencyContactNo: { type: String },
  email: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  postalCode: { type: String },
  swiftCode: { type: String },
  branchCode: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Using mongoose-sequence to generate unique IDs
BankSchema.plugin(AutoIncrement, { id: 'bank_id', inc_field: 'bankID', start_seq: 1 });

const BankModel = mongoose.model('banknames', BankSchema);

module.exports = BankModel;
