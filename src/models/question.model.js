/* eslint-disable camelcase */
const db = require('../db');
const { findOne, markHelpful, create, report } = require('./question.queries');

class Question {
  constructor(attrs) {
    this.attrs = attrs;
    this.required = ['body', 'name', 'email', 'product_id'];
  }

  async save() {
    if (!this.hasRequiredAttributes()) return false;

    const { product_id, body, name, email } = this.attrs;
    return db.any(create, [product_id, body, name, email]);
  }

  static async findOne() { db.any(findOne); }

  static async markHelpful(qid) { db.result(markHelpful, [qid], (r) => r.rowCount); }

  static async report(qid) { db.result(report, [qid], (r) => r.rowCount); }

  hasRequiredAttributes() { return this.required.every((key) => this.attrs[key]); }
}

module.exports = Question;
