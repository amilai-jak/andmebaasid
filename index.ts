import duckdb from 'duckdb';

const db = new duckdb.Database(':memory:');

const queryAsync = (query: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        db.all(query, (err: Error | null, res: any[]) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};

async function runDemo() {
    console.time("QueryExecutionTime");

    try {
        const query = `
            SELECT 
                category,
                COUNT(*) as total_sales,
                SUM(price * quantity) as total_revenue,
                AVG(price) as average_price
            FROM read_csv_auto('data.csv')
            GROUP BY category
            ORDER BY total_revenue DESC
            LIMIT 5;
        `;

        const result = await queryAsync(query);
        
        console.timeEnd("QueryExecutionTime");
        console.table(result);

    } catch (error) {
        console.error("Database error:", error);
    }
}

runDemo();