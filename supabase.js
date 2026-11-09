
import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Datos de conexión de nuestro proyecto
const SUPABASE_URL =
"https://fzvwvgkriamjnthuaurk.supabase.co";

// Pega aquí tu clave PUBLICABLE de Supabase
const SUPABASE_KEY =
"sb_publishable_AhQs47TbQzdiSosJM6UhKw_FC90Lp-t";

// Crear conexión con Supabase
export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
