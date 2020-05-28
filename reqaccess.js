
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
        console.log('Browser has no hasStorageAccess or requestStorageAccess methods\n');
    }
}

function reqAccess_ecwid() {
    if (document.hasStorageAccess && document.requestStorageAccess) {
        console.log('Browser has hasStorageAccess and requestStorageAccess methods\n');
        document.hasStorageAccess().then(
            function successful(hasAccess) {
                if (hasAccess) {
                    console.log('Checking if hasAccess already granted.... granted already. Exit\n');
                    window.location.replace("https://my.ecwid.com");
                } else {
                    console.log('Checking if hasAccess already granted.... not granted yet. Requesting...\n');
                    document.requestStorageAccess().then(
                        function successful() {
                            console.log('Access request was a success\n');
                            window.location.reload();
                        },
                        function fail() {
                            console.log('Storage Access API call failed5\n');
                            window.parent.location.href("https://gutorovas.github.io/redirect_page.html", 'mywin',
                                'toolbar=0,menubar=0,scrollbars=1,height=600,width=720');
                        }
                    );
                }
            },
            function rejected(reason) {
                console.log('hasStorageAccess failed: ' + reason + '\n');
                window.location.replace("https://my.ecwid.com");
            });
    } else {
        console.log('Browser has no hasStorageAccess or requestStorageAccess methods\n');
        window.location.replace("https://my.ecwid.com");
    }
}
