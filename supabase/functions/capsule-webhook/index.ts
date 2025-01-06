import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const { user } = await req.json()

    // Verify the webhook signature (implement according to Capsule's documentation)
    // Update user data in Supabase if needed
    const { error } = await supabaseClient
      .from('profiles')
      .update({
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id)

    if (error) throw error

    return new Response(
      JSON.stringify({ message: 'Webhook processed successfully' }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})