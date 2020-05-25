
function reqAccess() {
    if (document.hasStorageAccess && document.requestStorageAccess) {
        console.log('Browser has hasStorageAccess and requestStorageAccess methods\n');
        document.hasStorageAccess().then(
            function successful(hasAccess) {
                if (hasAccess) {
                    console.log('Checking if hasAccess already granted.... granted already. Exit\n');
                } else {
                    console.log('Checking if hasAccess already granted.... not granted yet. Requesting...\n');
                    document.requestStorageAccess().then(
                        function successful() {
                            console.log('Access request was a success\n');
                            window.location.reload();
                        },
                        function fail() {
                            console.log('Storage Access API call failed\n');
                        }
                    );
                }
            },
            function rejected(reason) {
                console.log('hasStorageAccess failed: ' + reason + '\n');
            });
    } else {
        console.log('Browser has no hasStorageAccess or requestStorageAccess methods' + '\n');
    }
}