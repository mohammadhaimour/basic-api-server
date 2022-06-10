'use strict';
const { app } = require('../src/srever');
const supertest = require('supertest');
const mockRequest = supertest(app);


const { db } = require('../src/models/index.model');


beforeAll(async () => {
    await db.sync();
});

describe('Web server', () => {


    it(' response like 404 status for an invalid route', async () => {
        const response = await mockRequest.get('/blaba');
        expect(response.status).toBe(404);
    });




    it('can add a food item', async () => {
        const response = await mockRequest.post('/food').send({
            name: 'panana',
            calories: 60
        });
        expect(response.status).toBe(201);
    });

    it('can get all food items', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);

    });


    it('can get one record', async () => {
        const response = await mockRequest.get('/food/1');
        expect(response.status).toBe(200);
    });

    it('can update a record', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });
    it('can delete a record', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});