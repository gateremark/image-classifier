<!DOCTYPE html>
<html lang="en">
  <head>
    <title>OcTech</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.11.7"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@0.1.1"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier@1.1.0"></script>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      href="https://www.coursera.org/widget/coursera-connect.css"
    />
    <script src="https://www.coursera.org/widget/coursera-widget-connect-v0.js"></script>

    <link href="css/global.css" type="text/css" rel="stylesheet" />
  </head>

  <body>
    <div class="container-fluid">
      <canvas style="display: none"></canvas>
      <div id="mainContainer-grid-video">
        <div class="gridItem-video header-video">
          <div id="checkbox-area">
            <input
              type="radio"
              name="input-type"
              value="video-input"
              id="video-input-radio-button"
              class="app-radio"
              onclick="handleInputChanged(this);"
            />
            <label for="video-input-radio-button"> Video</label>
            <input
              type="radio"
              name="input-type"
              value="file-input"
              id="file-input-radio-button"
              class="app-radio"
              checked="checked"
              onclick="handleInputChanged(this);"
            />
            <label for="file-input-radio-button"> From File</label>
          </div>
          <div id="reset-area">
            <button id="reset" onclick="reset();">Reset</button>
          </div>
          <div id="help-area">
            <button id="help">Help</button>
          </div>
        </div>
        <div class="gridItem-video camera-video">
          <h2 id="predicetd-video">Predicted Class:</h2>
          <hr id="predicted-video-line" />
          <img
            src="images/camera.png"
            id="camera-video-image"
            alt="Camera Drawing"
            title="Camera Drawing"
          />
          <img
            src="images/camera.png"
            id="camera-file-image"
            alt="Camera Drawing"
            title="Camera Drawing"
          />
          <img
            src="images/brain.png"
            id="brain-image"
            alt="Camera Drawing"
            title="Camera Drawing"
          />
          <div id="video-container">
            <video
              id="video"
              playsinline=""
              style="
                -moz-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
              "
            ></video>
          </div>
          <div id="file-container" style="display: none">
            <img
              id="loadedImg"
              alt="loaded image"
              src="images/transparent-large.png"
            />
            <input
              type="file"
              id="file-input-classify"
              name="file-input-classify"
              multiple
            />
          </div>
          <div id="file-input-classify-container">
            <label for="file-input-classify" class="fig-cap-classify"
              ><img
                src="images/upload.png"
                class="fig-classify"
                alt="upload image classify"
                width="30"
                height="30"
              />Load an Image To Classify</label
            >
          </div>
          <div id="video-classify">
            <input
              type="checkbox"
              name="do-classify"
              value="do-classify"
              id="do-classify-checkbox"
              class="app-checkbox"
              onclick="handleClassifyCheckbox(this);"
            />
            <label for="do-classify-checkbox"> Classify</label>
          </div>
        </div>
        <div class="gridItem-video class1-video">
          <div class="class-wrapper firstWrapper">
            <div class="class-ui">
              <input
                type="text"
                name="class_input"
                class="class-input"
                maxlength="10"
                placeholder="Enter Class Name"
              />
              <button
                id="video-button-1"
                class="video-button"
                onclick="handleAddVideoEvent(this)"
              >
                Add to Class
              </button>
              <div class="file-input-container">
                <input
                  type="file"
                  id="file-input-1"
                  class="file-input"
                  name="files[]"
                  multiple
                /><label for="file-input-1"
                  ><img
                    src="images/upload.png"
                    alt="upload icon"
                    class="fig-upload"
                    width="35"
                    height="35"
                /></label>
                <p class="fig-cap-upload"></p>
              </div>
              <p class="example-count-label" id="class-1-examples">
                0 Examples
              </p>
            </div>
            <div class="class-thumbnail">
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-1"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-2"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-3"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-4"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-5"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-6"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-7"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-8"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-9"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-10"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-11"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-12"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-13"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-14"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-15"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-1-16"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gridItem-video class2-video">
          <div class="class-wrapper secondWrapper">
            <div class="class-ui">
              <input
                type="text"
                name="class_input"
                class="class-input"
                maxlength="10"
                placeholder="Enter Class Name"
              />
              <button
                id="video-button-2"
                class="video-button"
                onclick="handleAddVideoEvent(this)"
              >
                Add to Class
              </button>
              <div class="file-input-container">
                <input
                  type="file"
                  id="file-input-2"
                  class="file-input"
                  name="files[]"
                  multiple
                /><label for="file-input-2"
                  ><img
                    src="images/upload.png"
                    alt="upload icon"
                    class="fig-upload"
                    width="35"
                    height="35"
                /></label>
                <p class="fig-cap-upload"></p>
              </div>
              <p class="example-count-label" id="class-2-examples">
                0 Examples
              </p>
            </div>
            <div class="class-thumbnail">
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-1"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-2"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-3"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-4"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-5"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-6"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-7"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-8"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-9"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-10"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-11"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-12"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-13"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-14"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-15"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-2-16"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gridItem-video class3-video">
          <div class="class-wrapper thirdWrapper">
            <div class="class-ui">
              <input
                type="text"
                name="class_input"
                class="class-input"
                maxlength="10"
                placeholder="Enter Class Name"
              />
              <button
                id="video-button-3"
                class="video-button"
                onclick="handleAddVideoEvent(this)"
              >
                Add to Class
              </button>
              <div class="file-input-container">
                <input
                  type="file"
                  id="file-input-3"
                  class="file-input"
                  name="files[]"
                  multiple
                /><label for="file-input-3"
                  ><img
                    src="images/upload.png"
                    alt="upload icon"
                    class="fig-upload"
                    width="35"
                    height="35"
                /></label>
                <p class="fig-cap-upload"></p>
              </div>
              <p class="example-count-label" id="class-3-examples">
                0 Examples
              </p>
            </div>
            <div class="class-thumbnail">
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-1"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-2"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-3"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-4"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-5"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-6"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-7"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-8"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-9"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-10"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-11"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-12"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-13"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-14"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-15"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
                <div class="col-md-2 col-sm-2 col-xs-2">
                  <img
                    class="thumbnail-img img-rounded"
                    id="class-3-16"
                    src="images/transparent.png"
                    alt="transparent image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gridItem-video footer-video">
          <div id="footer-name">
            <p>OcTech by Mark Gatere</p>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div id="introContainer">
        <figure>
          <img
            id="introImage"
            src="images/enuImageNoColour.png"
            alt="Main menu image illustration black and white"
            title="OcTech by Mark Gatere"
          />
          <img
            id="introImageActive"
            src="images/enuImageColour.png"
            alt="Main menu image illustration with colours"
            title="OcTech by Mark Gatere"
          />
        </figure>
        <h1 id="menuTitle">OcTech</h1>
        <hr />
        <button id="begin" name="beginButton">Begin</button>
      </div>
    </section>

    <div
      id="intro1"
      class="modal tutorial"
      tabindex="-1"
      role="dialog"
      data-show="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Machine Learning: OcTech</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>Welcome:</h3>
            <p>
              Hello there, <br />
              Welcome to this incredible and interactive
              <strong>Machine Learning</strong> environment.<br />
              Here, you will have the chance to experiment with a system
              commonly known as <strong>OcTech</strong>. <br />
              I know, I know, tutorials are boring and you probably just want to
              get on with the actual system. <br />
              Just bear with me for a very quick introduction on how you can
              operate the <strong>OcTech</strong> plugin; I promise it
              will not take long !
            </p>
            <br />
            <h3>OcTech:</h3>
            <p>
              This <strong>Machine Learning</strong> plugin uses image
              classification to recognise and classify images with similar
              properties together.<br />
              Practical uses of image classification include
              <strong><em>Image and Face Recognition</em></strong> on Social
              Networks,
              <strong><em>Automated Image Organization</em></strong> from Cloud
              Apps, <strong><em>Authentication</em></strong> and even
              <strong><em>Players Recognition</em></strong> in Gaming.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="nextFromFile btn btn-primary">
              Next
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="intro2"
      class="modal tutorial"
      tabindex="-1"
      role="dialog"
      data-show="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">The Plugin Structure</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>There are two different modes that you can try here:</p>
            <ul>
              <li>
                <strong>Image Classification from your Camera Device</strong>
              </li>
              <li><strong>Image Classification from File Upload</strong></li>
            </ul>
            <p>
              Toggle the checkbox located at the top of the plugin window to
              switch between the two different modes:
            </p>
            <img
              src="images/toggle.png"
              id="toggle-tutorial-img"
              alt="image of the toggle checkbox"
              title="image of the toggle checkbox"
            /><br />
            <h3>OcTech: Video</h3>
            <p>
              The video mode allows you to train the system by adding
              screenshots directly from your device camera to a specific class.
              You can then use the camera to predict in real time which class is
              the closest to the current video frame.
            </p>
            <h3>OcTech: From File</h3>
            <p>
              The file upload mode allows you to train the system by uploading
              image files from your device to a specific class. You can then
              upload another image file to predict which class is the closest to
              the upload.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="prevFromFile btn btn-primary">
              Previous
            </button>
            <button type="button" class="nextFromFile btn btn-primary">
              Next
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="intro3"
      class="modal tutorial"
      tabindex="-1"
      role="dialog"
      data-show="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">OcTech: From File Upload</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              The default mode of the <strong>OcTech</strong> plugin
              allows you to upload image files from your device and assign them
              to a specific class. You can then upload another image file and
              the system will predict to witch class it should belong to.
            </p>
            <h3>Training the System:</h3>
            <p>
              You can add images to a specific class.<br />
              Use the <em>upload button</em> to do so:
              <img
                src="images/upload-colour.png"
                id="upload-tutorial-img"
                alt="upload thumbnail"
                title="upload thumbnail"
              /><br /><br />
              The number of images uploaded per each class, together with a
              thumbnail grid preview of the files uploaded, will appear next to
              each class. There are a total of three classes where you can add
              files to: <strong>Class 1</strong> , <strong>Class 2</strong> and <br>
              <strong>Class 3 </strong> placed from top to bottom on the right
              hand side of the plugin view, respectively. You can customise and
              change each class name by simply clicking on the respective class
              name text field and type the new class name:
            </p>
            <img
              src="images/class-name.png"
              class="className-tutorial-img"
              alt="class name thumbnail"
              title="class name thumbnail"
            />
            <h3>Image Prediction:</h3>
            <p>
              Upload the image that you want the system to predict using <br />
              the <em>classify upload button</em> situated at the bottom of the
              plugin view:
            </p>
            <img
              src="images/classify-file.png"
              id="classifyFile-tutorial-img"
              alt="upload classify"
              title="upload classify"
            />
            <br />
            <p>
              As soon as you upload the image to be classified, the system will
              predict to which class it should belong to and will output a text
              message with the predicted class number:
            </p>
            <img
              src="images/predict.png"
              class="predict-tutorial-img"
              alt="classify result"
              title="classify result"
            />
            <br />
            <h3>Reset:</h3>
            <p>
              Use the <em>reset button</em> on the top right of the plugin view
              to clean your classes and start fresh from the beginning:
            </p>
            <img
              src="images/reset.png"
              class="reset-tutorial-img"
              alt="reset plugin"
              title="reset plugin"
            />
            <br />
            <h3>Help:</h3>
            <p>
              Use the <em>help button </em> on the top left of the plugin view
              to reopen this tutorial at any time:
            </p>
            <img
              src="images/help.png"
              class="help-tutorial-img"
              alt="help button"
              title="help button"
            />
            <br />
            <div class="down-arrow">
              <i class="arrow">&#8597;</i>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="prevFromFile btn btn-primary">
              Previous
            </button>
            <button type="button" class="nextFromFile btn btn-primary">
              Next
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="intro4"
      class="modal tutorial"
      tabindex="-1"
      role="dialog"
      data-show="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">OcTech: From Device Camera</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              The Device Camera mode of the
              <strong>OcTech</strong> plugin allows you to take
              screenshot images directly from your camera device and assign them
              to a specific class. You can then use the camera to predict in
              real time which class is the closest to the current video frame.
            </p>
            <h3>Camera Permission:</h3>
            <p>
              In order to use your camera device, you first need to accept the
              browser permission policy. Click <em>allow</em> when the
              permission pop-up shows up:
            </p>
            <img
              src="images/permission.png"
              id="permission-tutorial-img"
              alt="camera permission"
              title="camera permission"
            />
            <br />
            <p>
              At this point, the video will start and you should see yourself
              inside the camera plugin drawing.
            </p>
            <img
              src="images/camera-drawing.png"
              id="camera-tutorial-img"
              alt="camera drawing"
              title="camera drawing"
            />
            <br />
            <h3>Training the System:</h3>
            <p>
              You can add video frame images to a specific class.<br />
              Use the <em>add class button</em> to do so:
              <img
                src="images/class.png"
                id="class-tutorial-img"
                alt="add class button"
                title="add class button"
              /><br /><br />
              The number of images uploaded per each class, together with a
              thumbnail grid preview of the files uploaded, will appear next to
              each class. There are a total of three classes where you can add
              files to: <strong>Class 1</strong> , <strong>Class 2</strong> and
              <strong>Class3 </strong> placed from top to bottom on the right
              hand side of the plugin view, respectively. You can customise and
              change each class name by simply clicking on the respective class
              name text field and type the new class name:
            </p>
            <img
              src="images/class-name.png"
              class="className-tutorial-img"
              alt="class name thumbnail"
              title="class name thumbnail"
            />
            <h3>Video Frame Image Prediction:</h3>
            <p>
              Toggle the the <em>classify button</em> at the bottom of the
              plugin view to begin the classification:
            </p>
            <img
              src="images/classify-video.png"
              id="classify-video-tutorial-img"
              alt="video classify"
              title="video classify"
            />
            <br />
            <p>
              As soon as you toggle the <em>classify button</em>, the system
              will check the current video frame and predict to which class it
              should belong to.<br />
              The system will then output a text message with the predicted
              class number:
            </p>
            <img
              src="images/predict.png"
              class="predict-tutorial-img"
              alt="classify result"
              title="classify result"
            />
            <br />
            <h3>Reset:</h3>
            <p>
              Use the <em>reset button </em>on the top right of the plugin view
              to clean your classes and start fresh from the beginning:
            </p>
            <img
              src="images/reset.png"
              class="reset-tutorial-img"
              alt="reset plugin"
              title="reset plugin"
            />
            <br />
            <h3>Help:</h3>
            <p>
              Use the <em>help button</em> on the top left of the plugin view to
              reopen this tutorial at any time:
            </p>
            <img
              src="images/help.png"
              class="help-tutorial-img"
              alt="help button"
              title="help button"
            />
            <br />
            <div class="down-arrow">
              <i class="arrow">&#8597;</i>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="prevFromFile btn btn-primary">
              Previous
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script>
      let classifier;
      let mobilenetModule;
      const videoWidth = 400;
      const videoHeight = 300;
      const canvas = document.createElement('canvas');
      const reader = new FileReader();
      const NUM_THUMBS = 16;
      let localstream;
      let classifyOnInput = false;
      let videoAnimateTimer = null;
      let showVideoTutorial = false;
      const NO_EXAMPLES = '0 examples';
      let currentClassIndex = 0;

      //EVENT HANDLERS

      const handleClassifyCheckbox = (e) => {
        classifyOnInput = e.checked;
        const isVideo = document.getElementById('video-input-radio-button')
          .checked;
        if (isVideo) {
          clearInterval(videoAnimateTimer);
          videoAnimateTimer = null;
          if (classifyOnInput) {
            videoAnimateTimer = setInterval(classifyVideo, 1000 / 29.97);
          }
        }
      };

      const handleInputChanged = (e) => {
        if (e.value == 'file-input') {
          setInputFile();
        } else {
          setInputVideo();
        }
      };
      const classifyVideo = () => {
        const img = tf.fromPixels(video);
        predict(img);
      };

      const predict = (img) => {
        const logits = mobilenetModule.infer(img, 'conv_preds');
        classifier.predictClass(logits, 3).then((result) => {
          currentClassIndex = result.classIndex + 1;
          if (currentClassIndex == 1) {
            if (
              document.querySelectorAll('input[name=class_input]')[0].value ==
              ''
            ) {
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class: Unamed Class 1';
            } else
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class: ' +
                document.querySelectorAll('input[name=class_input]')[0].value;
          } else if (currentClassIndex == 2) {
            if (
              document.querySelectorAll('input[name=class_input]')[1].value ==
              ''
            ) {
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class:  Unamed Class 2';
            } else
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class: ' +
                document.querySelectorAll('input[name=class_input]')[1].value;
          } else if (currentClassIndex == 3) {
            if (
              document.querySelectorAll('input[name=class_input]')[2].value ==
              ''
            ) {
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class:  Unamed Class 3';
            } else
              document.getElementById('predicetd-video').innerHTML =
                'Predicted Class: ' +
                document.querySelectorAll('input[name=class_input]')[2].value;
          } else {
            document.getElementById('predicetd-video').innerHTML =
              'Predicted Class: ';
          }
          highlightClass();
        });
      };

      const handleAddVideoEvent = (e) => {
        const y = parseInt(e.id.substring(e.id.length - 1)) - 1;
        const img = tf.fromPixels(video);
        const logits = mobilenetModule.infer(img, 'conv_preds');
        classifier.addExample(logits, y);
        addThumbFromVideo(y);
      };

      const handleFileClassifyEvent = (e) => {
        const imgFiles = imageFilesFromFileEvent(e);
        reader.onload = (theFile) => {
          let img = document.getElementById('loadedImg');
          img.onload = () => {
            const img = tf.fromPixels(document.getElementById('loadedImg'));
            predict(img);
          };
          document.getElementById('loadedImg').src = theFile.target.result;
        };
        reader.readAsDataURL(imgFiles[0]);
      };

      const handleFileSelect = async (e) => {
        console.log(e.target.id);
        const y = parseInt(e.target.id.substring(e.target.id.length - 1)) - 1;
        const imgFiles = imageFilesFromFileEvent(e);
        for (const f of imgFiles) {
          await addFile(f, y);
        }
      };

      const imageFilesFromFileEvent = (e) => {
        let files = e.target.files;
        let imgFiles = [];
        for (let i = 0; i < files.length; i++) {
          f = files[i];
          if (f.type.match('image.*')) {
            imgFiles.push(f);
          }
        }
        return imgFiles;
      };

      const addFile = async (f, y) => {
        return new Promise((resolve, reject) => {
          reader.onload = (theFile) => {
            let img = document.getElementById('loadedImg');
            img.onload = () => {
              addFileToClass(y);
              addThumb(y, theFile.target.result);
              resolve();
            };
            document.getElementById('loadedImg').src = theFile.target.result;
          };
          reader.readAsDataURL(f);
        });
      };

      const addFileToClass = (y) => {
        const img = tf.fromPixels(document.getElementById('loadedImg'));
        const logits = mobilenetModule.infer(img, 'conv_preds');
        classifier.addExample(logits, y);
      };

      const addThumb = (y, src) => {
        let numExamples = classifier.getClassExampleCount()['' + y];
        const label = document.getElementById('class-' + (y + 1) + '-examples');
        label.innerHTML = numExamples + ' examples';
        let index = numExamples % NUM_THUMBS;
        if (index == 0) {
          index = NUM_THUMBS;
        }
        const thumbID = 'class-' + (y + 1) + '-' + index;
        const thumb = document.getElementById(thumbID);
        thumb.src = src;
      };

      const addThumbFromVideo = (y) => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        addThumb(y, canvas.toDataURL('image/webp'));
      };

      const setInputFile = () => {
        let vc = document.getElementById('video-container');
        let vcl = document.getElementById('video-classify');
        let fc = document.getElementById('file-container');
        let fcc = document.getElementById('file-input-classify-container');
        let vbs = [].slice.call(
          document.getElementsByClassName('video-button')
        );
        let fis = [].slice.call(
          document.getElementsByClassName('file-input-container')
        );
        let camVideo = document.getElementById('camera-video-image');
        let camFile = document.getElementById('camera-file-image');
        document.getElementById('predicetd-video').innerHTML =
          'Predicted Class: ';
        resetHighlightClass();
        document.getElementById('loadedImg').src =
          'images/transparent-large.png';
        vc.style.display = 'none';
        vcl.style.display = 'none';
        camVideo.style.display = 'none';
        fc.style.display = 'block';
        fcc.style.display = 'block';
        camFile.style.display = 'block';

        vbs.forEach((vb) => {
          vb.style.display = 'none';
        });
        fis.forEach((fi) => {
          fi.style.display = 'inline';
        });
        turnOffCamera();
      };

      const setInputVideo = () => {
        let vc = document.getElementById('video-container');
        let vcl = document.getElementById('video-classify');
        let fc = document.getElementById('file-container');
        let fcc = document.getElementById('file-input-classify-container');
        let vbs = [].slice.call(
          document.getElementsByClassName('video-button')
        );
        let fis = [].slice.call(
          document.getElementsByClassName('file-input-container')
        );
        let camVideo = document.getElementById('camera-video-image');
        let camFile = document.getElementById('camera-file-image');
        document.getElementById('predicetd-video').innerHTML =
          'Predicted Class: ';
        resetHighlightClass();
        document.getElementById('do-classify-checkbox').checked = false;
        fc.style.display = 'none';
        fcc.style.display = 'none';
        camFile.style.display = 'none';
        vc.style.display = 'block';
        vcl.style.display = 'block';
        camVideo.style.display = 'block';
        showVideoTutorial = true;

        vbs.forEach((vb) => {
          vb.style.display = 'inline';
        });
        fis.forEach((fi) => {
          fi.style.display = 'none';
        });
        setupCamera().then((video) => {
          video.play();
        });
      };

      const setupCamera = () => {
        return new Promise((resolve, reject) => {
          const video = document.getElementById('video');
          video.width = videoWidth;
          video.height = videoHeight;

          navigator.mediaDevices
            .getUserMedia({
              audio: false,
              video: {
                width: videoWidth,
                height: videoHeight,
              },
            })
            .then((s) => {
              localstream = s;
              video.srcObject = localstream;
              video.onloadedmetadata = () => {
                console.log('video loaded');
                resolve(video);
              };
            })
            .catch((e) => {
              console.log(
                'Browser API navigator.mediaDevices.getUserMedia not available'
              );
            });
        });
      };

      const turnOffCamera = () => {
        clearInterval(videoAnimateTimer);
        videoAnimateTimer = null;
        const video = document.getElementById('video');
        video.pause();
        video.src = '';
        if (localstream) {
          localstream.getTracks()[0].stop();
        }
        console.log('Video off');
      };

      const reset = () => {
        classifier.clearAllClasses();
        const thumbs = [].slice.call(
          document.getElementsByClassName('thumbnail-img')
        );
        thumbs.forEach((thumb) => {
          thumb.src = '';
        });
        const labels = [].slice.call(
          document.getElementsByClassName('example-count-label')
        );
        labels.forEach((label) => {
          label.innerHTML = NO_EXAMPLES;
        });

        document.getElementById('loadedImg').src =
          'images/transparent-large.png';
        document.getElementById('predicetd-video').innerHTML =
          'Predicted Class: ';
        resetHighlightClass();
        const className = [].slice.call(
          document.getElementsByClassName('class-input')
        );
        className.forEach((name) => {
          name.value = '';
        });
      };

      const highlightClass = () => {
        let $classWrappers = $('.class-wrapper');

        for (var index = 0; index < $classWrappers.length; index++) {
          if (index === 0) {
            $($classWrappers[index])
              .removeClass('highlightOne')
              .addClass('nohighlightOne');
          } else if (index === 1) {
            $($classWrappers[index])
              .removeClass('highlightTwo')
              .addClass('nohighlightTwo');
          } else if (index === 2) {
            $($classWrappers[index])
              .removeClass('highlightThree')
              .addClass('nohighlightThree');
          }
        }
        if (currentClassIndex - 1 === 0) {
          $($classWrappers[currentClassIndex - 1]).addClass('highlightOne');
        } else if (currentClassIndex - 1 === 1) {
          $($classWrappers[currentClassIndex - 1]).addClass('highlightTwo');
        } else if (currentClassIndex - 1 === 2) {
          $($classWrappers[currentClassIndex - 1]).addClass('highlightThree');
        }
      };

      const resetHighlightClass = () => {
        let $classWrappers = $('.class-wrapper');
        for (var index = 0; index < $classWrappers.length; index++) {
          $($classWrappers[index])
            .removeClass('highlight')
            .addClass('nohighlight');
        }
      };

      document.getElementById('loadedImg').src = 'images/transparent-large.png';
      $('.thumbnail-img').attr('src', 'images/transparent.png');
      $('.thumbnail-img').on('error', function () {
        $(this).attr('src', 'images/transparent.png');
      });

      const init = () => {
        const fis = [].slice.call(
          document.getElementsByClassName('file-input')
        );
        fis.forEach((fi) => {
          fi.addEventListener('change', handleFileSelect, false);
        });
        document
          .getElementById('file-input-classify')
          .addEventListener('change', handleFileClassifyEvent, false);

        classifier = knnClassifier.create();
        mobilenet.load().then((m) => {
          mobilenetModule = m;
          setInputFile();
        });
      };

      // this will be used for the coursera API
      //  courseraApi.callMethod({
      //   type: "GET_SESSION_CONFIGURATION",
      //   onSuccess: init
      // });

      $(document).ready(function () {
        init();
      });
    </script>

    <script src="scripts/MainMenuAnimation.js"></script>
    <script src="scripts/tutorial.js"></script>
  </body>
</html>
