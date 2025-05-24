/*
200 OK – Successful request.
201 Created – Resource successfully created.
204 No Content – Successful request, no content returned.
301 Moved Permanently
302 Found – Temporary redirect
304 Not Modified – Cached content is still valid.
400 Bad Request – Malformed request.
401 Unauthorized – Missing or invalid authentication.
403 Forbidden – Authenticated but no permission.
404 Not Found – Resource not found.
500 Internal Server Error
503 Service Unavailable 
*/

//! do not modify
// use this interface on all server actions
export default interface ActionResponse<DataType> {
    status: 200 | 201 | 204 | 301 | 302 | 401 | 403 | 404 | 500 | 503;
    success: boolean;
    message: string;
    data: DataType | null;
    error: Error | null;
}