import { test, expect } from '@playwright/test';

const CAMPAIGN_ID = '145602';
const RESPONSE_TIME_MLS = 200;
const TEST_EMAIL = 'test@hezzl.com';
const TEST_PASSWORD = '123456';

async function getToken() {
    const request = new Request('https://api-prod.hezzl.com/auth/v1/game/' + CAMPAIGN_ID + '/check-login', {
        method: "POST",
        body: JSON.stringify({ login: TEST_EMAIL }),
    });

    const response = await fetch(request);
    let data = await response.json();
    let accessToken = data.accessToken;
    
    return accessToken;
}

test.describe("LOGIN Collection", async () => {
    test("Test check-login method", async ({ request }) => {
        let start = Date.now();
        let checkResponse = await request.post(`/auth/v1/game/${CAMPAIGN_ID}/check-login`, {
            data: {
                "login": TEST_EMAIL
            }
        });
        let millis = Date.now() - start;
        expect(checkResponse.status(), "Check response status is 200").toBe(200);

        const jsonData = await checkResponse.json();
        expect(jsonData.accessToken, "Check accessToken parameter is exists in response").toBeTruthy();
        expect.soft(millis, "Response time must be less than 200 mls").toBeLessThanOrEqual(RESPONSE_TIME_MLS);
    });

    test("Test confirm-code method", async ({ request }) => {
        let accessToken = await getToken();
        let start = Date.now();
        let confirmResponse = await request.post(`/auth/v1/game/${CAMPAIGN_ID}/confirm-code`, {
            headers: {
                'Authorization': accessToken
            },
            data: {
                "code": TEST_PASSWORD
            }
        });
        let millis = Date.now() - start;
        expect(confirmResponse.status(), "Check response status is 200").toBe(200); 
        expect.soft(millis, "Response time must be less than 200 mls").toBeLessThanOrEqual(RESPONSE_TIME_MLS);
    });
});