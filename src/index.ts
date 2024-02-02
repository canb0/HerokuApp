// index.ts
import express, { Request, Response } from 'express';

let express = require('express');
const PORT = process.env.PORT || 3000;

// Sample user datac
const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Canberk Akduygu' },
  { id: '3', name: 'Hannibal Lecter' },
  { id: '4', name: 'Bruce Wayne' },
  // Add more users as needed
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your TypeScript web service!');
});

// Route to get users as JSON
app.get('/users', (req: Request, res: Response) => {
  res.status(200).json({ users });
});

// Route to get user by ID
app.get('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  // Find user by ID
  const user = users.find(u => u.id === id);

  // Check if user is not found
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Return user as JSON
  res.status(200).json({ user });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
