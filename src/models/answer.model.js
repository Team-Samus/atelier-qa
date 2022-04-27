/* eslint-disable max-len */
/* eslint-disable camelcase */
const db = require('../db');
const queries = require('../db/answer.queries');

class Answer {
  constructor(attrs) { Object.assign(this, attrs); }

  async save() {
    if (!this.hasRequiredAttributes()) return false;
    const queryVars = [this.question_id, this.body, this.name, this.email];
    const aid = await db.result(queries.save, queryVars, (r) => r.rows[0].answer_id);
    return Promise.all((this.photos || []).map((url) => db.result(queries.addPhoto, [aid, url])));
  }

  static findByQuestion(qid, page = 1, count = 5) {
    if (!qid) return false;
    const off = (page - 1) * count;

    return db.any(queries.findByQuestion, [qid, count, off]).catch(() => false);
  }

  static markHelpful(aid) {
    if (!aid) return false;
    return db.result(queries.markHelpful, [aid], (r) => r.rowCount);
  }

  static report(aid) {
    if (!aid) return false;
    return db.result(queries.report, [aid], (r) => r.rowCount);
  }

  hasRequiredAttributes() {
    const requiredAttributes = ['body', 'name', 'email', 'question_id'];
    return requiredAttributes.every((key) => this[key]);
  }
}

module.exports = Answer;
