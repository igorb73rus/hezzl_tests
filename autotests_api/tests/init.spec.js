import { test, expect } from '@playwright/test';
const CAMPAIGN_ID = '145602';

test.describe("INIT Collection", () => {
    test("Test init method", async ({ request }) => {
        let initResponse = await request.post(`/gw/v1/game/${CAMPAIGN_ID}/init`, {data: {}});
        expect(initResponse.status(), "Check response status is 200").toBe(200);

        let jsonData = await initResponse.json();
        expect(jsonData.time, "Check time parameter is exists in response").toBeTruthy();
        expect(jsonData.data, "Check data parameter is exists in response").toBeTruthy();

        let data = jsonData.data;
        expect(data.auth, "Check auth parameter is exists in data").toBeTruthy();
    });
});