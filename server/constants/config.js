// Allow local development plus every deployed client listed in CLIENT_URL
// (comma separated), so a Vercel preview URL can be added without a code change.
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  ...(process.env.CLIENT_URL || "").split(",").map((o) => o.trim()).filter(Boolean),
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
