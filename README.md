# Chat App — real-time messaging (MERN)

A full-stack chat application: private and group chats, live typing indicators, online
status, file sharing, friend requests and an admin dashboard.

Built while working through the MERN chat application course by 6 Pack Programmer,
end to end: server, client and deployment configuration.

```
server/   Node.js, Express, MongoDB (Mongoose), Socket.IO
client/   React 18, Redux Toolkit, Material UI, Vite
```

## Run it

**Server**

```bash
cd server
npm install
copy .sampleEnv .env        # then fill in the values below
npm run dev                 # http://localhost:3000
```

`.env` needs: `MONGO_URI`, `JWT_SECRET`, `ADMIN_SECRET_KEY`, `NODE_ENV`, `CLIENT_URL`,
and the three `CLOUDINARY_` values for file uploads.

**Client**

```bash
cd client
npm install
npm run dev                 # http://localhost:5173
```

`client/.env` holds `VITE_SERVER`, the address of the server.

Seed sample users and chats with the scripts in `server/seeders/`.

## What it does

- **Accounts.** Register with an avatar, log in, log out. Passwords hashed with bcrypt,
  JWT kept in an httpOnly cookie, every request body checked by express-validator.
- **Chats.** One-to-one and group chats; create a group, add or remove members, rename
  it, leave it, delete it.
- **Messaging.** Socket.IO delivers messages live, plus typing indicators, online users
  and unread-message alerts. The socket handshake is authenticated with the same JWT
  cookie as the REST API.
- **Files.** Avatars and attachments upload through Multer to Cloudinary.
- **Friends.** Send, accept and reject requests; notifications for new ones.
- **Admin dashboard.** Users, chats and messages tables, and usage statistics.

## API

24 REST endpoints, grouped by area.

| Area | Examples |
|---|---|
| `/api/v1/user` | `POST /new`, `POST /login`, `GET /me`, `GET /search`, `PUT /sendrequest`, `PUT /acceptrequest`, `GET /notifications`, `GET /friends` |
| `/api/v1/chat` | `POST /new`, `GET /my`, `GET /my/groups`, `PUT /addmembers`, `PUT /removemember`, `DELETE /leave/:id`, `POST /message`, `GET /message/:id`, `GET \| PUT \| DELETE /:id` |
| `/api/v1/admin` | `POST /verify`, `GET /users`, `GET /chats`, `GET /messages`, `GET /stats` |

## Socket events

`NEW_MESSAGE`, `NEW_MESSAGE_ALERT`, `NEW_ATTACHMENT`, `START_TYPING`, `STOP_TYPING`,
`CHAT_JOINED`, `CHAT_LEAVED`, `ONLINE_USERS`, `NEW_REQUEST`, `ALERT`, `REFETCH_CHATS`.

## Layout

```
server/models        user, chat, message, request schemas
server/controllers   user, chat, admin logic
server/routes        route definitions with validators
server/middlewares   auth, multer uploads, error handling
server/utils         cookies and tokens, Cloudinary upload, socket helpers
client/src/pages     Home, Chat, Groups, Login, admin
client/src/components  layout, dialogs, shared and specific UI
client/src/redux     store, API slice, reducers
```
