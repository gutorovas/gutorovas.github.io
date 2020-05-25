function reqAccess() {
    if (document.hasStorageAccess && document.requestStorageAccess) {
        console.log('On Browser');
        document.hasStorageAccess().then(
            function successful(hasAccess) {
                console.log('Testing if hasAccess');
                if (hasAccess) {
                    console.log('Access granted already');
                } else {
                    console.log('Requesting access');
                    document.requestStorageAccess().then(
                        function successful() {
                            console.log('Access request was a success');
                            window.location.reload();
                        },
                        function fail() {
                            console.log('Storage Access API call failed...');
                        });
                }
            },
            function rejected(reason) {
                console.log('hasStorageAccess failed: ', reason);
            });
    }
}
