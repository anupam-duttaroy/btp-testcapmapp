import cds from "@sap/cds";
import { executeHttpRequest } from '@sap-cloud-sdk/http-client';

export default async(srv) => {

    srv.on('testdest', async(req) => {
        // const retData = await executeHttpRequest(
        //     {destinationName: 'IS_TEST_1'},
        //     {method: 'post', url: '/', data: {"testOrder": "1234"}
        //     });
        const retData = await executeHttpRequest(
            {destinationName: 'localpc'},
            {method: 'get', url: '/test'
            });
        console.log(retData.data);
        return "test successful"
    });

    srv.on('testnw', async(req) => {
        const retData = await executeHttpRequest(
            {destinationName: 'northwind'},
            {method: 'get', url: '/Regions'
            });
        console.log(retData.data);
        return "test successful"
    });

}