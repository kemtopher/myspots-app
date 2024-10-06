const ApiAdapter = (url) => ({
    get: async(url) => {
        try {
            let res = await fetch(url, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
            });

            if (!res.ok) {
                const message = `An error has occured: ${res.status}`;
                throw new Error(message);
            }

            const data = await res.json();
            return data;
        } catch(err) {
            const message = `An error has occured: ${err.message}`;
            throw new Error(message);
        }
    },
    post: async (url, postData) => {
        try {
            let res = await fetch (url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            })

            if (!res.ok) {
                const message = `An error has occured: ${res.status}`;
                throw new Error(message);
            }

            const data = await res.json();
            return data;
        } catch (err) {
            const message = `An error has occured: ${err.message}`;
            throw new Error(message);
        }
    },
    put: async (url, data) => {
        try {
            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const message = `Update successful at: ${url}`;
            return message;
        } catch (err) {
            const message = `An error has occured: ${err.message}`;
            throw new Error(message);
        }
    },
    delete: async (url) => {
        try {
            await fetch(url, { method: "DELETE" })

            const message = `Delete successful at: ${url}`;
            return message;
        } catch (err) {
            const message = `An error has occured: ${err.message}`;
            throw new Error(message);
        }
    }
})