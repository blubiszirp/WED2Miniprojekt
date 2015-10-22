/**
 * Created by Frank on 22.10.2015.
 */

// declare dependency to angular (similar to import in java)
define(['frameworks/angular'], function (Angular) {

    // Create new empty app/module named 'lafete'
    var Lafete = Angular.module('lafete', []);

    // export module to use it in other classes
    return Lafete;
});