try {
    riskyFunction();
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Cleanup code can go there"); // Always runs
}

 throw new Error("this is not good!");