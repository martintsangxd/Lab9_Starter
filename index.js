window.addEventListener("DOMContentLoaded", init);

function init() {
    set_log_btn();
    set_error_btn();
    set_count_btn();
    set_warn_btn();
    set_assert_btn()
    set_table_btn();
    set_dir_btn();
    set_dirxml_btn();
    set_group_btns();
    set_time_btns();
    set_clear_btn();
    set_trace_btn();
    set_global_error_btn();
}

// set up the console log button, add event listener
function set_log_btn() {
    let log_btn = document.getElementById("console_log_btn");
    log_btn.addEventListener("click", function () {
        console.log("From Console.log: Hello World!");
    });
}

// set up the console error button, add event listener
function set_error_btn() {
    let error_btn = document.getElementById("console_error_btn");
    error_btn.addEventListener("click", function () {
        console.error("Logging Error from Button Press: An Error Has Occurred.");
    });
}

// set up the count button, add event listener
function set_count_btn() {
    let count_btn = document.getElementById("console_count_btn");
    count_btn.addEventListener("click", function () {
        console.count("Counter");
    });
}

// set up the warn button, add event listener
function set_warn_btn() {
    let warn_btn = document.getElementById("console_warn_btn");
    warn_btn.addEventListener("click", function () {
        console.warn('Final Warning to Pay Your Bill');
    });
}

// set up the assert button, add event listener
function set_assert_btn() {
    let assert_btn = document.getElementById("console_assert_btn");
    assert_btn.addEventListener("click", function () {
        let a = 1;
        let b = 2;
        console.assert(a+b===2, {a: a, b: b, errorMsg: "a+b is not equal to 2."});
    });
}

// set up the console table button, add event listener
function set_table_btn() {
    let table_btn = document.getElementById("console_table_btn");
    table_btn.addEventListener("click", function () {
        console.table([{first_name: "Daniel", last_name: "Brown"}, {first_name: "Martin", last_name: "Zeng"}]);
    });
}

// set up the console dir button, add event listener, log the meta-data of the document
function set_dir_btn() {
    let dir_btn = document.getElementById("console_dir_btn");
    dir_btn.addEventListener("click", function () {
        console.dir(document.head);
    });
}

// set up the console dirxml button, add event listener, log the error-btns node XML descedants
function set_dirxml_btn() {
    let dirxml_btn = document.getElementById("console_dirxml_btn");
    dirxml_btn.addEventListener("click", function () {
        console.dirxml(document.getElementById("error-btns"));
    });
}

// set up the console grouping functionality, both groupStart and groupEnd
function set_group_btns() {
    let group_start_btn = document.getElementById("console_group_start_btn");
    group_start_btn.addEventListener("click", function () {
        console.group("Group");
    });

    let group_end_btn = document.getElementById("console_group_end_btn");
    group_end_btn.addEventListener("click", function () {
        console.groupEnd("Group");
    });
}

// set up the console time buttons, add event listener
function set_time_btns() {
    let time_start_btn = document.getElementById("console_time_start_btn");
    time_start_btn.addEventListener("click", function () {
        console.time("Timer");
    });

    let time_end_btn = document.getElementById("console_time_end_btn");
    time_end_btn.addEventListener("click", function () {
        console.timeEnd("Timer");
    });
}

// set up the console clear button, add event listener
function set_trace_btn() {
    let trace_btn = document.getElementById("console_trace_btn");
    trace_btn.addEventListener("click", function () {
        arbitrary_function_one();
    });
}

// arbitrary function to test the trace functionality
function arbitrary_function_one () {
    arbitrary_function_two();
}

function arbitrary_function_two () {
    console.trace();
}

// set up the trigger global error button, add event listener
function set_global_error_btn() {
    let global_error_btn = document.getElementById("global_error_btn");
    global_error_btn.addEventListener("click", function () {
        document.getElementById('DNEElement').addEventListener(function(){});
    });
}

// set up the console clear button, add event listener
function set_clear_btn() {
    let clear_btn = document.getElementById("console_clear_btn");
    clear_btn.addEventListener("click", function () {
        console.clear();
    });
}
