        // useEffect(() => {
        //     const fetchData = async () => {
        //       const today = new Date();
        //       const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
        //       const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
        
        //       const lastMonthQuery = query(
        //         collection(db, data.query),
        //         where("timeStamp", "<=", today),
        //         where("timeStamp", ">", lastMonth)
        //       );
        //       const prevMonthQuery = query(
        //         collection(db, data.query),
        //         where("timeStamp", "<=", lastMonth),
        //         where("timeStamp", ">", prevMonth)
        //       );
        
        //       const lastMonthData = await getDocs(lastMonthQuery);
        //       const prevMonthData = await getDocs(prevMonthQuery);
        
        //       setAmount(lastMonthData.docs.length);
        //       setDiff(
        //         ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
        //           100
        //       );
        //     };
        //     fetchData();
        //   }, []);


        //adicionar query: "products", query: "users", para las graficas