import config from './config';
import productRouter from './routes/product';
import { app } from './services/express';

app.use('/api/product', productRouter);

app.listen(config.port, () => console.log(`🚀 Patricias Server running on port: ${config.port}`));
