import { Request, Response } from 'express';
import supabase from '../config/supabase';

export const signInWithGoogle = async (req: Request, res: Response):Promise<any> => {
  try {
    const { idToken } = req.body; 

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    const user = data.user;
    if (!user) return res.status(400).json({ error: "No user returned" });


    const { email, user_metadata } = user;
    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .upsert([{ id: user.id, email, name: user_metadata.full_name }]);

    if (insertError) {
      return res.status(500).json({ error: insertError.message });
    }

    res.json({ message: 'Signed in with Google', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
