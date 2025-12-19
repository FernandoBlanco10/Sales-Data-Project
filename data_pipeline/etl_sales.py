import pandas as pd
from sqlalchemy import create_engine

DB_NAME="sales_db"
DB_USER="postgres"
DB_PASSWORD="postgres"
DB_HOST="localhost"

engine = create_engine(f'postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}')

query = """
SELECT
    id,
    cantidad,
    total,
    fecha,
    "userId"
    "productId"
FROM "Sales";
"""

df_sales = pd.read_sql_query(query, engine)

df_sales['total'] = df_sales['total'].astype(float)
df_sales['fecha'] = pd.to_datetime(df_sales['fecha'])

df_summary = (
    df_sales
    .groupby(df_sales['fecha'].dt.date)
    .agg(
        num_ventas =('id', 'count'),
        total_ventas = ('total', 'sum'),
    )
    .reset_index()
)

df_summary.rename(columns={'fecha': 'fecha'}, inplace=True)
print(df_summary)

df_summary.to_sql(
    "sales_summary",
    engine,
    if_exists='replace',
    index=False
)

