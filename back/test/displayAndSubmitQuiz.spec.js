const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = require('chai').expect;
import app from '../router';

chai.use(chaiHttp);

it("display quiz", (done) => {
    chai.request(app)
        .get('/quiz/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.text('Connaissez-vous les animaux ?');
            done();
        });
});

it("submit quiz", (done) => {
    chai.request(app)
        .post('/create_quiz', {
            quiz_id: 1,
            name: 'Connaissez-vous bien les animaux ?',
            image: 'https://picsum.photos/100',
            theme: 'Animaux'
        })
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            console.log(res.body)
            done();
        });
});