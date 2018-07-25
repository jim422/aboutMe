<div>
    <ul data-bind="foreach: platforms" class="platform_list">
        <li data-bind="click: $parent.selectPlatform">
            <div class="cursor">
                <img data-bind="attr: { src: platform_icon }">

            </div>
            <span data-bind="text: platform_name"></span>
        </li>
    </ul>
</div>