export {};

declare global {
  namespace string {
    interface ProcessEnv {
        DATABASE_URL : string
        GOOGLE_CLIENT_ID:string
        GOOGLE_CLIENT_SECRET:string
        AUTH0_CLIENT_ID:string
        AUTH0_DOMAIN:string
        AUTH0_CLIENT_SECRET:string
        SESSION_SECRET:string
        AUTH0_CALLBACK_URL:string
        ENV: 'test' | 'dev' | 'prod';
    }
  }
}