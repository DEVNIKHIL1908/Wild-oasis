
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mbadrkyaltlvudrpsbkl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYWRya3lhbHRsdnVkcnBzYmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNjEyNjQsImV4cCI6MjAyMTYzNzI2NH0.6UXR6aLfDTxzBSRHK8GCWJno2-lHhnZ0hISTBNki9YQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 
export {supabaseUrl}