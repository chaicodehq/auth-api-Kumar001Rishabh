import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFound } from './middlewares/notFound.middleware.js';

/**
 * TODO: Create Express app
 *
 * 1. Create app with express()
 * 2. Add express.json() middleware
 * 3. Add GET /health route → { ok: true }
 * 4. Mount auth routes at /api/auth
 * 5. Mount user routes at /api/users
 * 6. Add notFound middleware
 * 7. Add errorHandler middleware (must be last!)
 * 8. Return app
 */
export function createApp() {
  // Your code here
  const app = express();

  app.use(express.json());

  app.get("/health", (req, res) => {
    return res.json({ ok: true });
  })

  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);

  app.use((req, res) => {
    return res.status(404).json({ message: "Route Not Found" })
  });

  app.use((err, req, res, next) => {
    res.status(res.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    })
  });

  return app;
}
