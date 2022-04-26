const db = require('../db');
const queries = require('../db/question.queries');

class Question {
  constructor(attrs) { Object.assign(this, attrs); }

  save() {
    if (!this.hasRequiredAttributes()) return false;
    return db.result(queries.save, [this.product_id, this.body, this.name, this.email]);
  }

  static findByProduct(pid, page = 1, count = 5) {
    if (!pid) return false;
    const off = (count - 1) * page;
    return db.one(queries.findByProduct, [pid, count, off], (r) => (r.api.results ? r.api : false));
  }

  static markHelpful(qid) {
    if (!qid) return false;
    return db.result(queries.markHelpful, [qid], (r) => r.rowCount);
  }

  static report(qid) {
    if (!qid) return false;
    return db.result(queries.report, [qid], (r) => r.rowCount);
  }

  hasRequiredAttributes() {
    const requiredAttributes = ['body', 'name', 'email', 'product_id'];
    return requiredAttributes.every((key) => this[key]);
  }
}

module.exports = Question;
