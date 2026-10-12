# FortunePay Android

Aplicación de control financiero personal para Android construida con Vite + Capacitor y Supabase.

## Incluye en esta primera base
- Registro e inicio de sesión con Supabase Auth.
- Resumen mensual de ingresos, gastos y balance.
- Crear movimientos y consultar historial.
- Flujo de GitHub Actions para compilar un APK de depuración.

## Conectar Supabase
Proyecto: `qeatndzahuvddzyaicxg`. En Supabase abre **Project Settings → API Keys** y copia la clave publicable (`sb_publishable_...`) o la clave anon heredada a `supabaseAnonKey` en `src/config.js`.

**Nunca pongas aquí una clave `service_role`, una secret key ni la contraseña de tu cuenta.** El código de un APK puede inspeccionarse. Las políticas RLS deben limitar los registros por `auth.uid() = user_id`.

## Descargar el APK
1. Abre la pestaña **Actions**.
2. Entra en **Build FortunePay Android APK**.
3. Pulsa **Run workflow** si no se ejecutó automáticamente.
4. Al terminar correctamente, abre la ejecución y descarga `FortunePay-debug-apk`.
5. Extrae el ZIP y encontrarás `app-debug.apk`.

Este primer APK es de depuración; para distribución pública habrá que configurar una firma de lanzamiento.

## Tecnologías
Vite, Capacitor 6, Supabase JS v2 y GitHub Actions. No se guardan movimientos financieros en localStorage; los datos se consultan en Supabase.