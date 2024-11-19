document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const planTabs = document.querySelectorAll('.plan-tab');
    const planResults = document.querySelectorAll('.plan-results');


    // Show Plan 1 by default
    document.getElementById('plan1-results').classList.add('active');


    planTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and results
            planTabs.forEach(t => t.classList.remove('active'));
            planResults.forEach(r => r.classList.remove('active'));


            // Add active class to clicked tab and corresponding results
            tab.classList.add('active');
            const planId = tab.getAttribute('data-plan');
            document.getElementById(`${planId}-results`).classList.add('active');
        });
    });


    calculateBtn.addEventListener('click', function() {
        // Get input values
        const percent1 = parseFloat(document.querySelector('[name="percent1"]').value) || 22;
        const percent2 = parseFloat(document.querySelector('[name="percent2"]').value) || 44;
        const advance1 = parseFloat(document.querySelector('[name="advance1"]').value) || 2.5;
        const advance2 = parseFloat(document.querySelector('[name="advance2"]').value) || 5;
        const cashPrice = parseFloat(document.querySelector('[name="price1"]').value) || 0;


        // Calculate Plan 1
        const plan1Total = cashPrice * (1 + percent1/100);
        const plan1Advance = plan1Total / advance1;
        let plan1MonthCount = getMonthCount(plan1Total);  // Get number of months based on total
        const plan1Monthly = (plan1Total - plan1Advance) / plan1MonthCount;
        const plan1Weekly = plan1Monthly / 4;
        const plan1Daily = (plan1Monthly/30) + 50;


        // Calculate Plan 2
        const plan2Total = cashPrice * (1 + percent2/100);
        const plan2Advance = plan2Total / advance2;
        let plan2MonthCount = getPlan2MonthCount(plan2Total);  // New function for Plan 2
        const plan2Monthly = (plan2Total - plan2Advance) / plan2MonthCount;
        const plan2Weekly = plan2Monthly / 4;
        const plan2Daily = (plan2Monthly / 30) + 50;


        // Calculate Total Months
        const totalMonths = plan1MonthCount + plan2MonthCount;


        // Update Plan 1 Results
        document.getElementById('plan1-months').textContent = plan1MonthCount +" Months";
        document.getElementById('plan1-total').textContent = plan1Total.toFixed(0);
        document.getElementById('plan1-advance').textContent = plan1Advance.toFixed(0);
        document.getElementById('plan1-monthly').textContent = plan1Monthly.toFixed(0       );
        document.getElementById('plan1-weekly').textContent = plan1Weekly.toFixed(0);
        document.getElementById('plan1-daily').textContent = plan1Daily.toFixed(0);


        // Update Plan 2 Results
        document.getElementById('plan2-months').textContent = plan2MonthCount+" Months";
        document.getElementById('plan2-total').textContent = plan2Total.toFixed(0);
        document.getElementById('plan2-advance').textContent = plan2Advance.toFixed(0);
        document.getElementById('plan2-monthly').textContent = plan2Monthly.toFixed(0);
        document.getElementById('plan2-weekly').textContent = plan2Weekly.toFixed(0);
        document.getElementById('plan2-daily').textContent = plan2Daily.toFixed(0);


        // Update Total Months
        document.getElementById('total-months').textContent = totalMonths + ' Months Total';
    });


    // Function to determine number of months based on amount
    function getMonthCount(amount) {
        if (amount < 3600) return 1;
        if (amount < 9700) return 2;
        if (amount < 18600) return 3;
        if (amount < 29700) return 4;
        if (amount < 43200) return 5;
        return 6;
    }


    // New function for Plan 2
    function getPlan2MonthCount(amount) {
        if (amount < 3900) return 2;
        if (amount < 11000) return 4;
        if (amount < 22000) return 6;
        if (amount < 35000) return 8;
        if (amount < 51000) return 10;
        return 12;
    }
});





