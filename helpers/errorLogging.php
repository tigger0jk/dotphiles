<?
// include this file to your and then call these functions

// common use case is to just pass a message for standard printing or to pass a descriptive message an then the data that is described the the message
// for instance:
// pfay_log("I made it to this line of code!");
// pfay_log("Here's some data", array(1, 2, 3));
function pfay_log($msg = "", $data = "") {
  pfay_log_type($msg, $data, false);
}

function pfay_log_type($msg = "", $data = "", $printType = true) {
  if (is_array($data) || is_bool($data) || is_object($data)) {
    $printData = json_encode($data);
  } else {
    $printData = $data;
  }
  if($printType === true) {
    error_log("PFAY Message=> $msg :: Data=> $printData :: Type=> " . gettype($data));
  } else {
    error_log("PFAY Message=> $msg :: Data=> $printData");
  }
}

// common use case is to call this to see where we got to a certain line from
// pfay_stacktrace("I got into this particular function from here");
function pfay_stacktrace($msg = "") {
  error_log("PFAY Message=> $msg :: Stack Trace:");
  $bt=debug_backtrace();
  $sp=0;
  foreach($bt as $k=>$v)
  {
    if(isset($v['file'])) {
      $file = $v['file'];
    } else {
      $file = "";
    }
    if(isset($v['line'])) {
      $line = $v['line'];
    } else {
      $line = "";
    }
    if(isset($v['function'])) {
      $function = $v['function'];
    } else {
      $function = "";
    }
    $trace="";
    $trace.=str_repeat(" ",++$sp);
    $trace.="file=$file, line=" . $line . ", function=" . $function;
    error_log($trace);
  }
}

// just another name for the above
function pfay_backtrace($msg = "")
{
  pfay_stacktrace($msg);
}

/**
 * Uses reflection to determine function parameter names
 * and prints out the arguments associated with them
 *
 * Please call this function like so:
 * pfay_log_params(__METHOD__, func_get_args());
 */
function pfay_log_params($method, $args) {
  list($class, $func) = explode('::', $method);
  $reflMethod = new ReflectionMethod($class, $func);
  foreach ($reflMethod->getParameters() as $param) {
    pfay_log($func . " param " . $param->getName(), $args[$param->getPosition()]);
  }
}
